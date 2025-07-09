<?php
// run_python_script.php

// Replace 'your_python_script.py' with the actual filename of your Python script
$pythonScript = 'your_python_script.py';

// Execute the Python script and capture its output
$output = shell_exec("python3 $pythonScript 2>&1");

// Output the captured Python script output jb
echo '<pre>' . htmlspecialchars($output).'</pre>';
?>