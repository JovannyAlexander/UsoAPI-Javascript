searchFormBtn.addEventListener('click', () =>{
    location.hash = '#search=';
});
trendingBtn.addEventListener('click', () =>{
    location.hash = '#trends=';
});

arrowBtn.addEventListener('click', () =>{
    location.hash = '#home=';
});

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
    

    if (location.hash.startsWith('#trends=')){
        trendsPage();
    }
    else if (location.hash.startsWith('#search=')){
        searchPage();
    }
    else if (location.hash.startsWith('#movie=')){
        moviePage();
    }
    else if (location.hash.startsWith('#category=')){
        categoryPage();
    }else{
        homePage();
        getTrendingMoviesPreview();
        getCategoriesPreview();
    }

    location.hash
}

function homePage(){
    console.log('HOME!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    titleCategotie.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewList.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
}

function categoryPage(){
    console.log('CATEGORY!!');

    headerSection.classList.remove('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    titleCategotie.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewList.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}

function moviePage(){
    console.log('MOVIE!!');


    headerSection.classList.add('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    //titleCategotie.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewList.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
}

function searchPage(){
    console.log('SEARCH!!');

    headerSection.classList.remove('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    titleCategotie.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewList.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}

function trendsPage(){
    console.log('TREMDS!!');
    headerSection.classList.remove('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    titleCategotie.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewList.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}