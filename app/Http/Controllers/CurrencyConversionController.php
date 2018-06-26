<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class CurrencyConversionController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        return view('currencyconversion', ['currencies'=>$this->getCurrencies()]);

    }


    private function getCurrencies($isBase = false)
    {
        $allowedBase = ['AUD', 'CAD', 'CHF', 'EUR', 'GBP', 'INR', 'NZD', 'USD',];
        $allowed = ['AED', 'AUD', 'BRL', 'BGN', 'CAD', 'CHF', 'CNY', 'DKK', 'EGP', 'EUR', 'GBP', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'IRR', 'ISK', 'IQD', 'JPY', 'KES', 'KRW', 'LKR', 'MAD', 'MUR', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'QAR', 'RUB', 'SAR', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'USD', 'ZAR',];
        $currenciesJson = file_get_contents(getenv('UKFX_API') . "/currency");
        $_currencies = json_decode($currenciesJson, true);
        $currencies = [];
        foreach ($_currencies['entities'] as $c) {
            if (in_array($c['iso'], $isBase ? $allowedBase : $allowed)) {
                $currencies[] = $c;
            }
        }
        return $currencies;
    }
}
