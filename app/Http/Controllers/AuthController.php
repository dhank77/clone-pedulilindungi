<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('Auth/Login');
    }

    public function check_login(Request $request)
    {
        $request->validate([
            'no_telp' => 'required', 
            'password' => 'required', 
        ]);

        if(Auth::attempt($request->only('no_telp', 'password'))){
            session()->regenerate();
            return redirect(route('home'))->with([
                'type' => 'success',
                'messages' => 'Berhasil Login!' 
            ]);
        }else{
            return redirect()->back()->with([
                'type' => 'error',
                'messages' => 'Gagal Login!' 
            ]);
        }
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

        $data = $request->except(['password', 'password_konfirmasi']);
        $data['password'] = Hash::make(request('password'));

        $user = User::create($data);
        if($user){
            return redirect('/login')->with([
                'type' => 'success',
                'messages' => 'Pendaftaran Vaksinasi Berhasil!'
            ]);
        }
    }

    public function lists()
    {
        $sc = request('search');
        $page = request('show') ?? 5;
        $peserta = User::orderBy('id', 'desc')
                ->when($sc, function($qr, $sc){
                    $qr->where('name', 'LIKE', "%$sc%");
                })
                ->paginate($page);

        $peserta->appends(request()->except(['page']));

        return inertia('Auth/Lists', compact('peserta'));
    }

    public function json()
    {
        $peserta = User::orderBy('id', 'desc')->paginate(5);

        return response()->json($peserta);
    }
}
