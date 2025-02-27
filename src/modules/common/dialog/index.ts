import { Dialog as DialogComponent } from './components/Dialog';
import { DialogTrigger as DialogTriggerComponent } from './components/DialogTrigger';
import { DialogContent as DialogContentComponent } from './components/DialogContent';

export default Object.assign(DialogComponent, { Trigger: DialogTriggerComponent, Content: DialogContentComponent });