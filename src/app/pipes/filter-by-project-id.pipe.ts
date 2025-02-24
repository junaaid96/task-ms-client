import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByProjectId'
})
export class FilterByProjectIdPipe implements PipeTransform {
    transform(tasks: any[], projectId: number): any[] {
        if (!tasks) {
            return [];
        }
        return tasks.filter(task => task.projectId === projectId);
    }
}