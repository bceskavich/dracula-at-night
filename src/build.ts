import { writeFileSync } from 'fs';
import { DraculaAtNight } from './themes';

writeFileSync(
  `${__dirname}/../theme/dracula-at-night.json`,
  JSON.stringify(DraculaAtNight, null, 2)
);
