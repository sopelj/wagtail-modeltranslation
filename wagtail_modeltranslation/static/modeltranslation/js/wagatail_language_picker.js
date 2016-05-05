$(function() {
    var $fields = $('ul.objects');
    var $languagePicker = $('select.language-picker');
    if ($languagePicker.length > 0 && $fields.length > 0) {
        var $translationFields = $fields.find('li.translation-field');
        var $headerColumn = $('header .row .col3');
        if ($headerColumn.length == 0) {
            $headerColumn = $('<div class="col3" />');
            $('header .row').append($headerColumn);
        }
        $languagePicker.appendTo($headerColumn).show();
        
        $fields.find('li.translation-field').not('.lang-' + $languagePicker.val()).hide();

        $languagePicker.on('change', function(e) {
            $translationFields.hide();
            $fields.find('li.translation-field.lang-' + $(this).val()).show();
        });
    }
    $('.tab-content.hidden').removeClass('hidden');
});
