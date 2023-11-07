import { IMemberInvite, MemberRoleEnum, MemberStatusEnum } from '@novu/shared';

import { UserEntity } from '../user';
import type { OrganizationId } from '../organization';
import type { IEntity, ObjectIdType, TransformEntityToDbModel, TransformValues } from '../../types';

export class MemberEntity implements IEntity {
  _id: string;

  _userId?: string;

  user?: Pick<UserEntity, 'firstName' | '_id' | 'lastName' | 'email'>;

  roles: MemberRoleEnum[];

  invite?: IMemberInvite;

  memberStatus: MemberStatusEnum;

  _organizationId: OrganizationId;
}

export type MemberDBModel = TransformEntityToDbModel<
  TransformValues<
    MemberEntity,
    'invite',
    IMemberInvite & {
      _inviterId: ObjectIdType;
    }
  >
>;
