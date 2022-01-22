import { Pipe, PipeTransform } from '@angular/core';

export function mockPipe(options: Pipe): Pipe {
  const metadata: Pipe = {
    name: options.name
  };

  return Pipe(metadata)(
    class MockPipe implements PipeTransform {
      transform(value: any) {
        return value;
      }
    }
  );
}

// Just an example there is pipe named iwdf
export const pipes: any[] = [mockPipe({ name: 'iwdf' })];
