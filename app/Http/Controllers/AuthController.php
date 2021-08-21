<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('Login');
    }
    public function register()
    {
        return inertia('Register');
    }
}
