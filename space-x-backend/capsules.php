<?php
include './curl.php';
include './helper.php';

cors();
const API_URL = "https://api.spacexdata.com/v3/capsules";

if (!isset($_GET)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request",
    ]);
}

$filters = [
    'original_launch' => getIfSet('original_launch'),
    'status' => getIfSet('status'),
    'type' => getIfSet('type'),
    'landings' => getIfSet('landings'),
];

$curl = new Curl(formatUrl(API_URL, $filters));

$response = $curl->queryApi();

echo json_encode([
    'success' => true,
    "capsules" => json_decode($response),
]);
