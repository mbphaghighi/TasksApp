jQuery(document).ready(function($){

    ////----- Open the modal to CREATE a link -----////
    jQuery('#btn-add').click(function () {
        jQuery('#modalFormData').trigger("reset");
        jQuery('#linkEditorModal').modal('show');
    });

    ////----- Open the modal to UPDATE a link -----////
    jQuery('body').on('click', '.open-modal', function () {
        var task_id = $(this).val();
        $.get('tasks/' + task_id, function (data) {
            jQuery('#task_id').val(data.id);
            jQuery('#task').val(data.name);
            jQuery('#description').val(data.description);
            jQuery('#btn-save').val("update");
            jQuery('#linkEditorModal').modal('show');
        })
    });

    $("#btn-save").click(function () {
        jQuery('#modalFormData').trigger("reset");
        jQuery('#linkEditorModal').modal('hide');
        location.reload();
    })
    });







