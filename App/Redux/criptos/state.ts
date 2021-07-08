import { Criptos } from '../../Models/Criptos';
import { RequestStatus } from '../../Models/RequestStatus';

export interface CriptosState {
    criptos?: Criptos | null;
    message: string | null;
    status: RequestStatus | null;
}
