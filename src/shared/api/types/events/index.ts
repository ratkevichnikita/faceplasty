interface SiteDomain {
  id: string;
  name: string;
}

interface Content {
  id: string;
}

export interface Event {
  id: string;
  name: string;
  description: string | null;
  shortName: string | null;
  status: string;
  internalName: string | null;
  comment: string | null;
  firstStartEventDelay: string;
  lastCompletionEventDelay: string;
  completedDate: string | null;
  hasEvents: boolean;
  initialState: string | null;
  firstEventStartDelayMs: number;
  currentDurationMs: number;
  duration: number;
  startedDate: string | null;
  scheduledCompletionDate: string;
  scheduledDate: string;
  afterCompletionRedirectUrl: string;
  closeRegistrationBeforeStartInHours: number;
  siteDomain: SiteDomain;
  siteDomainId: string;
  contents: Content[];
  designSettingsJson: string
  templateDurationMs: number
}