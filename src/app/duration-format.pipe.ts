import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {
  transform(totalTime: number): string {
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor((totalTime % 60000) / 1000);
    const milliseconds = totalTime % 1000;
  
    // Additional formatting logic as needed
  
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}
