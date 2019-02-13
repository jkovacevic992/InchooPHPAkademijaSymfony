var $collectionHolder;


var $addTagButton = $('<button type="button" class="add_tag_link">Add a tag</button>');
var $newLinkLi = $('<li></li>').append($addTagButton);

jQuery(document).ready(function() {

    $collectionHolder = $('ul.tags');

    $collectionHolder.find('li').each(function() {
        addTagFormDeleteLink($(this));
    });


    $collectionHolder.append($newLinkLi);

    $collectionHolder.data('index', $collectionHolder.find(':input').length);

    $addTagButton.on('click', function(e) {

        addTagForm($collectionHolder, $newLinkLi);
    });
});

function addTagForm($collectionHolder, $newLinkLi) {

    var prototype = $collectionHolder.data('prototype');

    var index = $collectionHolder.data('index');

    var newForm = prototype;

    newForm = newForm.replace(/__name__/g, index);

 $collectionHolder.data('index', index + 1);


    var $newFormLi = $('<li></li>').append(newForm);
    $newLinkLi.before($newFormLi);

    addTagFormDeleteLink($newFormLi);
}

function addTagFormDeleteLink($tagFormLi) {
    var $removeFormButton = $('<button type="button" class="btn btn-primary">Delete this tag</button>');
    $tagFormLi.append($removeFormButton);

    $removeFormButton.on('click', function(e) {

        $tagFormLi.remove();
    });
}