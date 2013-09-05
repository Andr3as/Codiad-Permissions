<!--
    Copyright (c) Codiad & Andr3as, distributed
    as-is and without warranty under the MIT License. 
    See [root]/license.md for more information. This information must remain intact.
-->
<form>
    <?php
        error_reporting(0);
        
        require_once('class.util.php');
        require_once('../../common.php');
        checkSession();
        
        $path = util::getWorkspacePath($_GET['path']);
        if (is_dir($path)) {
            $perm = substr(decoct(fileperms($path)),2);
        } else {
            $perm = substr(decoct(fileperms($path)),3);
        }
        echo '
            <p>Change permissions</p>
            <input id="permissions" placeholder="'.$perm.'" type="text">
            <button onclick="codiad.Permissions.change(); return false;">Change</button>
            <button onclick="codiad.modal.unload(); return false;">Close</button>
        ';
    ?>
    <script>
        $('#permissions').focus();
    </script>
</form>