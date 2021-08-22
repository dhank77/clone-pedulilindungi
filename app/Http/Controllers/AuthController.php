<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('Auth/Login');
    }

    public function check_login(Request $request)
    {
        
    }
    
    public function register()
    {
        return inertia('Auth/Register');
    }

    public function check_register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'nik' => 'required|unique:users',
            'no_telp' => 'required|unique:users',
            'password' => 'required|same:password_konfirmasi',
            'password_konfirmasi' => 'required',
        ]);

        $user = User::create($request->all());
        if($user){
            return redirect('/login')->with([
                'type' => 'success',
                'messages' => 'Pendaftaran Vaksinasi Berhasil!'
            ]);
        }
    }
}
