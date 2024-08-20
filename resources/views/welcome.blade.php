<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ asset('Logo/LGU.png') }}" type="image/x-icon" />
    @vite('resources/css/app.css')
</head>

<body class="antialiased">
    <div id="app">

    </div>
    @viteReactRefresh
    @vite('resources/js/app.js')
</body>

</html>
