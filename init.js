/*
* Copyright (c) Codiad & Andr3as, distributed
* as-is and without warranty under the MIT License.
* See [root]/license.md for more information. This information must remain intact.
*/

(function(global, $){
    
    var codiad = global.codiad,
        scripts = document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    $(function() {
        codiad.Permissions.init();
    });

    codiad.Permissions = {
        
        path    : curpath,
        file    : "",
        
        init: function() {
        },
        
        //////////////////////////////////////////////////////////
        //
        //  Show dialog to modify permissions
		//
		//  Parameters:
		//
		//  path - {String} - File path
		//
		//////////////////////////////////////////////////////////
        showDialog: function(path) {
            this.file = path;
            codiad.modal.load(100, this.path+"dialog.php?path="+path);
        },
        
        //////////////////////////////////////////////////////////
        //
        //  Change permissions
        //
		//////////////////////////////////////////////////////////
        change: function() {
            var perm = $('#permissions').val();
            codiad.modal.unload();
            $.getJSON(this.path+"controller.php?action=changePermission&path="+this.file+"&mode="+perm, function(data){
                if (data.status == "error") {
                    codiad.message.error(data.message);
                } else {
                    codiad.message.success(data.message);
                }
            });
        }
        
    };
})(this, jQuery);