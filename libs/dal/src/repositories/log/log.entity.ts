import { LogCodeEnum, LogStatusEnum } from '@novu/shared';

import type { OrganizationId } from '../organization';
import type { EnvironmentId } from '../environment';
import type { ChangePropsValueType, TransformValues } from '../../types/helpers';

export class LogEntity {
  _id: string;

  transactionId: string;

  text: string;

  code: LogCodeEnum;

  // eslint-disable-next-line
  raw: any;

  status: LogStatusEnum;

  createdAt: string;

  _messageId: string;

  _notificationId: string;

  _subscriberId: string;

  _organizationId: OrganizationId;

  _environmentId: EnvironmentId;
}

export type LogDBModel = ChangePropsValueType<TransformValues<LogEntity, 'createdAt', Date>>;
