/*****************************************************************************
Copyright (c) 2007-2020 - Maxprograms,  http://www.maxprograms.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to compile,
modify and use the Software in its executable form without restrictions.

Redistribution of this Software or parts of it in any form (source code or
executable binaries) requires prior written permission from Maxprograms.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*****************************************************************************/

const _p = require("electron");

class Preferences {

    constructor() {
        _p.ipcRenderer.send('get-theme');
        _p.ipcRenderer.send('get-preferences');
        _p.ipcRenderer.on('set-theme', (event, arg) => {
            (document.getElementById('theme') as HTMLLinkElement).href = arg;
        });
        _p.ipcRenderer.on('set-preferences', (event, arg) => {
            (document.getElementById('themeColor') as HTMLSelectElement).value = arg.theme;
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                window.close();
            }
            if (event.key === 'Enter') {
                this.savePreferences();
            }
        });
        document.getElementById('save').addEventListener('click', () => {
            this.savePreferences();
        });
    }

    savePreferences() {
        var theme: string = (document.getElementById('themeColor') as HTMLSelectElement).value;
        var prefs: any = { theme: theme }
         _p.ipcRenderer.send('save-preferences', prefs);
    }
}

new Preferences();



