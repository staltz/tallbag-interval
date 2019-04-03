import {Source} from 'tallbag';
import {Metadata} from 'shadow-callbag';
declare const interval: (period: number) => Source<number, Metadata>;
export default interval;
