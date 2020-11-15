export class AirportDTO {
  public name: string;
  public code: string;

  public constructor(opts?: AirportDTO) {
    Object.assign(this, opts);
  }
}
