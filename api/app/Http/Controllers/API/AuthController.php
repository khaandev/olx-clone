<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required',
        'c_password' => 'required|same:password'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => 'Validation error',
            'errors' => $validator->errors(),
        ], 400);
    }

    try {
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $token = $user->createToken('MyApp')->plainTextToken;

        $response = [
            'success' => true,
            'data' => [
                'token' => $token,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'email_verified_at' => $user->email_verified_at,
                ],
            ],
            'message' => 'User Register in successfully',
        ];


        return response()->json($response, 200);
    } catch (\Illuminate\Database\QueryException $e) {
        if ($e->errorInfo[1] == 1062) {
            return response()->json([
                'success' => false,
                'message' => 'Email already registered',
            ], 400);
        }

        return response()->json([
            'success' => false,
            'message' => 'An error occurred',
            'error' => $e->getMessage(),
        ], 500);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'An error occurred',
            'error' => $e->getMessage(),
        ], 500);
    }
}

public function login(Request $request)
{
    try {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
            'remember_me' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 400);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        $tokenExpiration = $request->has('remember_me') ? null : config('sanctum.expiration');

        $token = $user->createToken('MyApp', ['*'], null, $tokenExpiration)->plainTextToken;

        $response = [
            'success' => true,
            'data' => [
                'token' => $token,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'email_verified_at' => $user->email_verified_at,
                ],
            ],
            'message' => 'User logged in successfully',
        ];

        return response()->json($response, 200);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'An error occurred',
            'error' => $e->getMessage(),
        ], 500);
    }
}

public function getUser()
{
    try {
        $user = auth()->user();

        return response()->json([
            'success' => true,
            'data' => [
                'user' => $user,
            ],
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'An error occurred',
            'error' => $e->getMessage(),
        ], 500);
    }
}


public function logout(Request $request)
{
    try {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'User logged out successfully',
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'An error occurred',
            'error' => $e->getMessage(),
        ], 500);
    }
}


}
