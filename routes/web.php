<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfilController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('Home');
})->name('home');

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'check_login']);

Route::get('/register', [AuthController::class, 'register'])->name('register');
Route::post('/register', [AuthController::class, 'check_register']);

Route::get('/lists/peserta', [AuthController::class, 'lists'])->name('lists.peserta');

Route::middleware('auth')->group(function(){
    Route::get('/profil', [ProfilController::class, 'index'])->name('profil');
    Route::get('/inbox', [ProfilController::class, 'inbox'])->name('inbox');
    Route::get('/riwayat', [ProfilController::class, 'riwayat'])->name('riwayat');
    Route::get('/sertifikat', [ProfilController::class, 'sertifikat'])->name('sertifikat');

});
