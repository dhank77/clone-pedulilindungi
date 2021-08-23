<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function index()
    {
        return inertia('Profil');
    }

    public function inbox()
    {
        return inertia('Inbox');
    }

    public function riwayat()
    {
        return inertia('Riwayat');
    }

    public function sertifikat()
    {
        return inertia('Sertifikat');
    }
}
