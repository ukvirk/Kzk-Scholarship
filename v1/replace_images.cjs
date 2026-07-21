const fs = require('fs');

function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [search, replace] of replacements) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(filePath, content, 'utf8');
}

replaceInFile('src/data/scholarshipData.ts', [
    ['1541339907198-e08756dedf3f', '1562774053-701939374585'],
    ['1523050854058-8df90110c9f1', '1498243691581-b145c3f54a5a'],
    ['1581092921461-eab62e97a780', '1517245386807-bb43f82c33c4'],
    ['1434030216411-0b793f4b4173', '1523240795612-9a054b0db644']
]);

replaceInFile('src/App.tsx', [
    ['1569428034239-f9565e32e224', '1614704739504-715309d5bb00'],
    ['alt="Astana Kazakhstan Skyline"', 'alt="Astana Bayterek Monument Kazakhstan"'],
    ['1549880338-65ddcdfd017b', '1585824556447-f58c49e29548'],
    ['alt="Kazakhstan Nature Almaty Mountains"', 'alt="Big Almaty Lake Kazakhstan"'],
    ['Almaty Mountain Peaks', 'Big Almaty Lake, Tien Shan'],
    ['1507842217343-583bb7270b66', '1558500201-90c0fbdf72fb'],
    ['alt="Study Hub Library"', 'alt="Astana Kazakhstan Architecture"']
]);

console.log('Replacements completed.');
