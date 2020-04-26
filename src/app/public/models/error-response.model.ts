import { IFileHeader } from './responses/file_header.model';
import { IBatchHeader } from './responses/batch_header.model';
import { IBatchControl} from './responses/batch_control.model';
import { IFileControl } from './responses/file_control.model';
import { IError} from './responses/error.model';

export interface IResponse{
  fileHeader: IFileHeader,
  batchHeaders: Array<IBatchHeader>,
  batchControls: Array<IBatchControl>,
  fileControl: IFileControl,
  errors: Array<IError>
}
