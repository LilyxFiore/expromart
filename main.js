$('.owl-carousel').owlCarousel({
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})

$(_ =>{
    $.getJSON('https://reqres.in/api/users?page=1', response =>{
        createList(response.data);
    }).fail(() =>{alert("Error server");});
});

const createList = (data) =>{
    var content = $('<div class="content"></div>');
    var contentUser = $('<div class="content-user"></div>');
    data.forEach(function (item) {
        contentUser = $('<div class="content-user"><img src="' + item.avatar +'"/><p>' + item.first_name + " "+ item.last_name + '</p></div>');
        content.append(contentUser)
    })
    $('.list-user').append(content);
};