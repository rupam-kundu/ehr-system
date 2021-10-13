import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PatientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Patient {
  readonly id: string;
  readonly title?: string;
  readonly first_name: string;
  readonly middle_name?: string;
  readonly last_name: string;
  readonly date_of_birth?: string;
  readonly gender?: string;
  readonly street_address?: string;
  readonly city?: string;
  readonly state?: string;
  readonly country?: string;
  readonly postal_code?: string;
  readonly phone: string;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Patient, PatientMetaData>);
  static copyOf(source: Patient, mutator: (draft: MutableModel<Patient, PatientMetaData>) => MutableModel<Patient, PatientMetaData> | void): Patient;
}