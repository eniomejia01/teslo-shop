


export const generatePaginationNumbers = ( currentPage: number, totalPages: number ) => {

    //si el umero total de pagias es 7 o menos, vamos a mostrar totas las paginas sin puntos suspensivos

    if( totalPages <= 7){
        return Array.from({ length: totalPages }, (_, i) => i + 1 )
    }

    //si la pagina actual esta entre las primeras 3 paginas 
    //mostrat las primeras 3, puntos suspensivos, y las utlimas 2
    if( currentPage <= 3 ){
        return [1,2,3,'...', totalPages -1, totalPages ];
    }

    //si la pagina actual esta entre las ultimas 3 paginas 
    //mostrat las primeras 2, puntos suspensivos, las ultimas 3
    if( currentPage >= totalPages - 2 ){
        return [1,2,'...', totalPages -2, totalPages -1, totalPages ];
    }

    //si la pagina actual esta en otro lugar medio
    //mostrar la primera pagina, puntos suspensivos, la paginna actual y vecinos

    return[
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
    ];

}