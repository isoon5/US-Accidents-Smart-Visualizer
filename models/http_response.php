<?php
class HttpResponse
{

    public function OK($result)
    {
        http_response_code(200);
        echo json_encode([
            "data_time" => date("m/d/Y h:i:s:a"),
            "data" => $result,
        ]);
    }

    public function badRequest($error_message)
    {
        http_response_code(400);

        echo json_encode([
            "date" => date("m/d/Y h:i:s:a"),
            "version" => "1.0.0",
            "error_type" => "Invalid parameter",
            "message" => $error_message,
        ]);
    }
}