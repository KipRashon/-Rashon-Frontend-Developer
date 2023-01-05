<?php

function cors()
{
    header('Access-Control-Allow-Origin: *');
    // header('Content-Type: application/json');

}

function formatUrl($url, $params)
{
    $append = '';
    foreach ($params as $key => $value) {
        if ($value) {
            $append .= $key . '=' . $value . '&';
        }
    }

    if (!$append) {
        return $url;
    }

    return $url . '?' . $append;
}

function getIfSet($key)
{
    return isset($_GET[$key]) ? $_GET[$key] : '';
}
