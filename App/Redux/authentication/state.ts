import { User } from '../../Models/User';
import { RequestStatus } from '../../Models/RequestStatus';

export interface AuthenticationState {
    user?: User | null;
    message?: string | null;
    status: RequestStatus | null;
}
