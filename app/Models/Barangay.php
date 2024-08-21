<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Barangay extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'barangay',
        'created_by',
        'date_created'
    ];

    public static function boot()
    {
        parent::boot();


        static::creating(function ($model) {
            $model->date_created = $model->date_created ?? Carbon::now('singapore')->toDateTimeString();
            $model->created_by = $model->created_by ?? Auth::id();
        });
    }
}
