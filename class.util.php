<?php

    class util {
        
        static public function getWorkspacePath($path) {
            if (strpos($path, "/") == 0) {
                //Unix absolute path
                return $path;
            }
            if (strpos($path, ":/") !== false) {
                //Windows absolute path
                return $path;
            }
            if (strpos($path, ":\\") !== false) {
                //Windows absolute path
                return $path;
            }
            return "../../workspace/".$path;
        }
    }
?>