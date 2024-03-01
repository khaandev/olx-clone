<?php
namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function register(array $userData)
    {
        try {
            $userData['password'] = bcrypt($userData['password']);
            $user = User::create($userData);

            $token = $user->createToken('MyApp')->plainTextToken;

            $response = [
                'success' => true,
                'data' => [
                    'token' => $token,
                    'user' => $this->formatUser($user),
                ],
            ];

            return $response;
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    public function login(array $credentials)
    {
        try {
            $user = User::where('email', $credentials['email'])->first();

            if (!$user || !Hash::check($credentials['password'], $user->password)) {
                return $this->unauthorizedResponse();
            }

            $tokenExpiration = array_key_exists('remember_me', $credentials) ?
                null : config('sanctum.expiration');

            $token = $user->createToken('MyApp', ['*'], null, $tokenExpiration)->plainTextToken;

            $response = [
                'success' => true,
                'data' => [
                    'token' => $token,
                    'user' => $this->formatUser($user),
                ],
            ];

            return $response;
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    public function getUser()
    {
        try {
            $user = auth()->user();

            return [
                'success' => true,
                'data' => [
                    'user' => $user,
                ],
            ];
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    public function logout($request)
    {
        try {
            $request->user()->currentAccessToken()->delete();

            return [
                'success' => true,
                'message' => 'User logged out successfully',
            ];
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    private function formatUser(User $user)
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'gender' => $user->gender,
            'phone' => $user->phone,
            'bio' => $user->bio,
            'date' => [
                'day' => $user->day,
                'month' => $user->month,
                'year' => $user->year,
            ],
            'email_verified_at' => $user->email_verified_at,
        ];
    }

    private function unauthorizedResponse()
    {
        return [
            'success' => false,
            'message' => 'Unauthorized',
        ];
    }

    private function handleError(\Exception $e)
    {
        return [
            'success' => false,
            'message' => 'An error occurred',
            'error' => $e->getMessage(),
        ];
    }
}
