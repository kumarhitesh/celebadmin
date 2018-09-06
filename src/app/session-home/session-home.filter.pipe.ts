import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (items && items.length) {
            return items.filter(item => {
                if (filter && item.sessionName.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
                    if (filter && item.id.toString().indexOf(filter) === -1) {
                        if (item.mediaMode.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
                return true;
            });
        } else {
            return items;
        }
    }
}

