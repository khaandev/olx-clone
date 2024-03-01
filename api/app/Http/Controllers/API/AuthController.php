<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\AuthService;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    private $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function register(RegistrationRequest $request)
    {
        return response()->json($this->authService->register($request->validated()));
    }

    public function login(LoginRequest $request)
    {
        return response()->json($this->authService->login($request->all()));
    }

    public function getUser()
    {
        return response()->json($this->authService->getUser());
    }

    public function logout(Request $request)
    {
        return response()->json($this->authService->logout($request));
    }
}
