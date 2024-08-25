<?php

namespace App\Http\Requests\PrecinctRequest;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PrecinctStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'precinct' => [
                'required',
                Rule::unique('precincts')->whereNull('deleted_at'),
            ],
        ];
    }
}
