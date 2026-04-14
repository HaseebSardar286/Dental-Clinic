const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    
    // Replace standard info classes with custom teal classes
    if (content.includes('text-info')) {
        content = content.replace(/text-info/g, 'text-custom-teal');
        hasChanges = true;
    }
    if (content.includes('bg-info')) {
        content = content.replace(/bg-info/g, 'bg-custom-teal');
        hasChanges = true;
    }
    if (content.includes('btn-info')) {
        content = content.replace(/btn-info/g, 'btn-custom-teal');
        hasChanges = true;
    }
    if (content.includes('btn-outline-info')) {
        content = content.replace(/btn-outline-info/g, 'btn-outline-custom-teal');
        hasChanges = true;
    }
    
    if (hasChanges) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated: ' + file);
    }
});
