import { Injectable } from '@angular/core';
import { FileDTO } from '../models/shared-models';
import { HttpClientHelperService } from './http-client-helper.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    constructor(
        private httpClientHelperService: HttpClientHelperService) { }

    b64toBlob(b64Data, mimeType, fileName): FileDTO {
        const sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: mimeType });
        return { fileBlobContent: blob, fileName: fileName };
    }

    downloadFile(file: FileDTO) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.href = URL.createObjectURL(file.fileBlobContent);
        link.download = file.fileName;
        if (file.fileBlobContent.type == 'application/vnd.ms-excel') link.download += '.xlsx';
        if (file.fileBlobContent.type == 'pdf') link.download += '.pdf';
        link.click();
    }
}
