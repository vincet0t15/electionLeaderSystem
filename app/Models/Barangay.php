<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Barangay extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'barangay',
        'created_by',
        'date_created'
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->date_created = $model->date_created ?? Carbon::now('singapore')->toDateTimeString();
            $model->created_by = $model->created_by ?? Auth::id();
        });
    }
}
