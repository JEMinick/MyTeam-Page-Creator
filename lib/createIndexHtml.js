
const fs = require('fs');

function createIndexHTML( teamInfo, bDebugging )
{
let bError = false;

sHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link 
      rel="stylesheet" 
      href="https://use.fontawesome.com/releases/v5.15.3/css/all.css">

    <title>Employee Information</title>

    <style>

    :root {
        --border-radius: 10px;
        --min-card-width: 320px;
        --max-card-width: 360px;
        --primary-font-clr: white;
        --primary-bg-clr: lightgray;
        --shadow-color: rgb(150, 145, 145);
        --page-hdr-bg: rgb(32, 32, 80);
        --card-hdr-bg: rgb(98, 98, 253);
        --card-body-bg: rgb(225, 236, 234);
        --hyperlink-clr: blue;
    }

    body {
        background-color: var(primary-bg-clr);
    }

    .app-header {
        color: var(--primary-font-clr);
        font-size: 36px;
        padding: 2rem;
        border-radius: var(--border-radius);
    }

    h1 {
        color: var(--primary-font-clr);
        background-color: var(--page-hdr-bg);
        font-size: 48px;
        margin-top: 20px;
    }
    h2 {
        font-size: 36px;
    }
    h3 {
        font-size: 30px;
    }
    h2, h3 {
        color: var(--primary-font-clr);
        background-color: var(--card-hdr-bg);
        padding-left: 20px;
    }
    
    a {
        color: var(--hyperlink-clr);
    }
    
    .row {
      min-width: 320px;
      background-color: var(primary-bg-clr);
    }
    
    .card-size {
        min-width: var(--min-card-width);
        max-width: var(--max-card-width);
    }
    .card-header {
        background-color: var(--card-hdr-bg);
        box-shadow: 10px 10px 5px var(--shadow-color);
        min-width: 300px;
    }
    .card-header:first-child {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }
    .card-body {
        background-color: var(--card-body-bg);
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        box-shadow: 10px 10px 5px var(--shadow-color);
        min-width: 300px;
    }
    
    </style>
    
</head>

<body>
    
    <div class="container-fluid">
        
        <div class="row">
            <div class="col-12">
                <h1 class="app-header w-100 text-center">
                    My Team
                </h1>
            </div>
        </div>

        <div class="row d-flex justify-content-center mt-2 mb-3">
            ${teamInfo}
            
        </div>
                
    </div>
    
    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    
</body>
</html>
`;

    fs.writeFile('./output/index.html', sHTML, (error) => {
        if ( error ) {
            bError = true;
            console.error(error);
        } else {
            if ( bDebugging )
                console.log(`\nFILE CONTENTS:`)
        }
    });
    if ( !bError ) {
        fs.readFile( './output/index.html', 'utf8', (error, sHTML) => {
            if ( error ) {
                bError = true;
                console.error( error );
            } else {
                console.log( `\nFiles created are located in: ./output/...`);
                if ( bDebugging )
                    console.log( sHTML );
            }
        });
    }

    return !bError;
}

module.exports = createIndexHTML;
