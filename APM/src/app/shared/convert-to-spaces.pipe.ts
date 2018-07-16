import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'covertToSpace'
})
export class ConvertToSpacesPile implements PipeTransform {
    transform(value: string, character: string): string {
         return value.replace(character, ' ');
    }
}