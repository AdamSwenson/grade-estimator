<?php
class JQueryVersionSelect{
/*
 *This detects the presence of an external internet connection.
 *If a connection is present, it loads the file connecting to cdn copies of jquery
 *If it is absent, it uses locally stored versions of jquery.
 * It will run everything upon construction.
*/
	public $externalConnection;
	public function __construct(){
		$tryconnect = @fsockopen("www.adamswenson.net", 80);
		if($tryconnect){
			$this->externalConnection = true;
			fclose($tryconnect);
			$this->useHosted();
		}
		else{
			$this->externalConnection = false;
			$this->useLocal();
		}
	}
	protected function useLocal(){
		//jquery main
		echo '<script type="text/javascript" src="../jqueryFiles/jquery-1.8.2.min.js"></script>';
		//jquery ui (smoothness)
		echo '<script type="text/javascript" src="../jqueryFiles/jquery-ui-1.9.0.smoothness/js/jquery-ui-1.9.0.custom.min.js"></script>';
		//template plugin 
		echo '<script type="text/javascript" src="../jqueryFiles/jquery.tmpl.min.js"></script>';
	}
	
	protected function useHosted(){
		//Nb, Starting with the // gets around problems with http and https
		// (though will create problems if page is not loaded on a server --if loaded file://)
		echo '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript"></script>';
		//echo '<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js" type="text/javascript" ></script>';
		echo '<script src="http://code.jquery.com/ui/1.9.1/jquery-ui.js" type="text/javascript" ></script>';
		echo '<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.js"></script>';
//		echo '<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css">';
        echo '<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/themes/trontastic/jquery-ui.css">';
	}
#JQUERY VERSION SELECT
}