interface Storage {
    load: (key: string) => Promise<Buffer>,
    save: (key: string, data: Buffer) => Promise<void>
  }