# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### LogGroupSubscriptionProps <a name="LogGroupSubscriptionProps" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps"></a>

Props for LogGroupSubscription.

#### Initializer <a name="Initializer" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.Initializer"></a>

```typescript
import { LogGroupSubscriptionProps } from '@wheatstalk/cdk-sns-log-group-subscription'

const logGroupSubscriptionProps: LogGroupSubscriptionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | Queue to be used as dead letter queue. |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.property.filterPolicy">filterPolicy</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_sns.SubscriptionFilter}</code> | The filter policy. |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.property.logFormat">logFormat</a></code> | <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogFormat">LogFormat</a></code> | Choose the log format to use. |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | LogGroup to subscribe to the SNS Topic. |

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* No dead letter queue enabled.

Queue to be used as dead letter queue.

If not passed no dead letter queue is enabled.

---

##### `filterPolicy`<sup>Optional</sup> <a name="filterPolicy" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.property.filterPolicy"></a>

```typescript
public readonly filterPolicy: {[ key: string ]: SubscriptionFilter};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_sns.SubscriptionFilter}
- *Default:* all messages are delivered

The filter policy.

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.property.logFormat"></a>

```typescript
public readonly logFormat: LogFormat;
```

- *Type:* <a href="#@wheatstalk/cdk-sns-log-group-subscription.LogFormat">LogFormat</a>
- *Default:* LogFormat.RECORD

Choose the log format to use.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* a new log group will be created.

LogGroup to subscribe to the SNS Topic.

---

## Classes <a name="Classes" id="Classes"></a>

### LogGroupSubscription <a name="LogGroupSubscription" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscription"></a>

- *Implements:* aws-cdk-lib.aws_sns.ITopicSubscription

Subscribes a CloudWatch LogGroup to your topic.

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscription.Initializer"></a>

```typescript
import { LogGroupSubscription } from '@wheatstalk/cdk-sns-log-group-subscription'

new LogGroupSubscription(options?: LogGroupSubscriptionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscription.Initializer.parameter.options">options</a></code> | <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps">LogGroupSubscriptionProps</a></code> | *No description.* |

---

##### `options`<sup>Optional</sup> <a name="options" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscription.Initializer.parameter.options"></a>

- *Type:* <a href="#@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscriptionProps">LogGroupSubscriptionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscription.bind">bind</a></code> | Returns a configuration used to subscribe to an SNS topic. |

---

##### `bind` <a name="bind" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscription.bind"></a>

```typescript
public bind(topic: ITopic): TopicSubscriptionConfig
```

Returns a configuration used to subscribe to an SNS topic.

###### `topic`<sup>Required</sup> <a name="topic" id="@wheatstalk/cdk-sns-log-group-subscription.LogGroupSubscription.bind.parameter.topic"></a>

- *Type:* aws-cdk-lib.aws_sns.ITopic

---





## Enums <a name="Enums" id="Enums"></a>

### LogFormat <a name="LogFormat" id="@wheatstalk/cdk-sns-log-group-subscription.LogFormat"></a>

Format of the log.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogFormat.BATCH">BATCH</a></code> | Log the complete SNS record batch. |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogFormat.RECORD">RECORD</a></code> | Log each SNS record individually. |
| <code><a href="#@wheatstalk/cdk-sns-log-group-subscription.LogFormat.MESSAGE">MESSAGE</a></code> | Log the unenveloped record. |

---

##### `BATCH` <a name="BATCH" id="@wheatstalk/cdk-sns-log-group-subscription.LogFormat.BATCH"></a>

Log the complete SNS record batch.

(i.e., one or more records.)

---


##### `RECORD` <a name="RECORD" id="@wheatstalk/cdk-sns-log-group-subscription.LogFormat.RECORD"></a>

Log each SNS record individually.

---


##### `MESSAGE` <a name="MESSAGE" id="@wheatstalk/cdk-sns-log-group-subscription.LogFormat.MESSAGE"></a>

Log the unenveloped record.

---

