<?php
        if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit']))  { 
            $connect = mysqli_connect('%','cj','','blood_Donation_Camp_DB') or die("Connection Failed:".mysqli_connect_error());
            if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['bgroup'])){
                $name = $_POST['name'];
                $email = $_POST['email'];
                $phone = $_POST['phone'];
                $bgroup = $_POST['bgroup'];

                $spl = "INSERT INTO 'users' ('name','email','phone','bgroup') VALUES ('$name','$email','$phone','$bgroup')";

                $query = mysqli_query($connect,$sql);
                if($query){
                    echo 'Entry Successfull';
                }
                else{
                    echo 'Error Occurred';
                }
            }
        }
?>