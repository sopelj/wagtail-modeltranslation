$(function() {
    var $fields = $('ul.objects');
    var $languagePickerDiv = $('.language-picker');
    if ($languagePickerDiv.length > 0 && $fields.length > 0) {
        var $translationFields = $fields.find('li.translation-field');

        var $headerColumn = $('header .row .col3');
        if ($headerColumn.length == 0) {
            // The create page doesn't have the right column
            $headerColumn = $('<div class="col3" />');
            $('header .row').append($headerColumn);
        }
        $languagePickerDiv.appendTo($headerColumn).show();
        var $languagePicker = $languagePickerDiv.find('select');
        
        $fields.find('li.translation-field').not('.lang-' + $languagePicker.val()).hide();

        $languagePicker.on('change', function() {
            var langCode = $(this).val();
            if(langCode === 'all') {
                $translationFields.show();
            } else {
                $translationFields.hide();
                $fields.find('li.translation-field.lang-' + langCode).show();
            }
        });
    }
    $('.tab-content.hidden').removeClass('hidden');
});
