<?php
require_once 'start.php'; 

if (session_status() === PHP_SESSION_ACTIVE) {
    session_unset();    
    session_destroy();  
    echo "Session telah dihapus.";
} else {
    echo "Tidak ada session yang aktif.";
}
?>