<?php






//$url = 'http://api.geonames.org/findNearByWeatherJSON?formatted=true&lat=48&lng=10&username=Claudiu26&style=full';

$url = 'http://api.geonames.org/findNearByWeatherJSON?formatted=true&lat=' . $_REQUEST['lat'] . '&lng=' . $_REQUEST['lng'] . '&username=Claudiu26&style=full';



$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);


$result = curl_exec($ch);


curl_close($ch);

	

$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
    $output['data'] = $decode['weatherObservation'];
    
    echo json_encode($output); 


	
	
header('Content-Type: application/json; charset=UTF-8');





?>